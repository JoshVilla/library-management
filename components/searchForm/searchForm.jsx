import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const SearchForm = ({ api, result, searchProps }) => {
  const form = useForm();
  const [loadingSearch, setLoadingSearch] = useState(false);

  // Reset the form inputs
  const handleReset = () => {
    form.reset(); // Reset form fields
    // If you want to explicitly reset the select field to empty or default
    searchProps.forEach((prop) => {
      if (prop.type === "select") {
        form.setValue(prop.name, ""); // Reset the select field to an empty value or set to a default value
      }
    });
    api(); // Optional: If you want to call the API on reset
  };

  // Handle the search functionality
  const handleSearch = async (params) => {
    try {
      setLoadingSearch(true);
      const res = await api(params);
      if (res.data.length === 0) {
        result(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingSearch(false);
    }
  };

  return (
    <div className="my-6">
      <Form {...form}>
        <form
          className="flex items-center gap-5 flex-wrap"
          onSubmit={form.handleSubmit(handleSearch)} // Only handle submit on form submit
        >
          {searchProps.map((prop, idx) =>
            prop.type === "input" ? (
              <FormField
                key={idx}
                control={form.control}
                name={prop.name}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder={prop.placeholder}
                          {...field}
                          value={field.value || ""}
                          className="w-60"
                          onChange={(e) => {
                            field.onChange(
                              prop.onChange ? prop.onChange(e) : e.target.value
                            );
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            ) : (
              <FormField
                key={idx}
                control={form.control}
                name={prop.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder={prop.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Categories</SelectLabel>
                            {prop.options.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          )}
          {/* Reset button: Will trigger the handleReset method */}
          <Button
            type="button" // Make sure it's type="button" to avoid form submission
            size="sm"
            variant="outline"
            onClick={handleReset}
          >
            Reset
          </Button>
          {/* Search button: Will trigger form submission */}
          <Button type="submit" size="sm">
            {loadingSearch && (
              <Image
                src={"/assets/Loading.gif"}
                alt="loading"
                width={10}
                height={10}
              />
            )}
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
