"use client";

import React from "react";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search, SearchIcon } from "lucide-react";

export interface SearchOption {
  value: string | number | boolean;
  label: string;
}

export interface SearchProp {
  type: "input" | "select";
  name: string;
  placeholder?: string;
  options?: SearchOption[];
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => string | number | boolean;
}

interface SearchProps {
  label: string;
  value: string;
}

interface SearchFormProps<T> {
  searchProps: SearchProp[];
  api: (params?: any) => Promise<{ data: T[] }>;
  result: (data: T[]) => void;
}

// Create a dynamic schema based on searchProps
const createFormSchema = (searchProps: SearchProp[]) => {
  const schemaObj: Record<string, z.ZodType<any>> = {};
  searchProps.forEach((prop) => {
    if (prop.type === "input") {
      schemaObj[prop.name] = z.string().optional();
    } else {
      schemaObj[prop.name] = z
        .union([z.string(), z.number(), z.boolean()])
        .optional();
    }
  });
  return z.object(schemaObj);
};

{
  /*@ts-ignore */
}
const SearchForm: React.FC<any> = ({ api, result, searchProps }) => {
  const formSchema = createFormSchema(searchProps);
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [selected, setSelected] = useState<string | number | boolean>("");

  // Reset the form inputs
  const handleReset = () => {
    form.reset();
    searchProps.forEach((prop) => {
      if (prop.type === "select") {
        form.setValue(prop.name, "");
      }
    });
    api();
  };

  // Handle the search functionality
  const handleSearch = async (params: FormValues) => {
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
          onSubmit={form.handleSubmit(handleSearch)}
        >
          {searchProps.map((prop, idx) =>
            prop.type === "input" ? (
              <FormField
                key={idx}
                control={form.control}
                name={prop.name}
                render={({ field }) => (
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
                )}
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
                        onValueChange={(value) => {
                          let parsedValue =
                            value === "true"
                              ? true
                              : value === "false"
                              ? false
                              : isNaN(Number(value))
                              ? value
                              : Number(value);
                          field.onChange(parsedValue);
                          setSelected(parsedValue);
                        }}
                        value={field.value?.toString() || ""}
                      >
                        {/* @ts-ignore */}
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a value" />
                        </SelectTrigger>
                        {/* @ts-ignore */}
                        <SelectContent position="popper">
                          <SelectGroup>
                            {prop.options?.map((category) => (
                              <div key={category.value.toString()}>
                                {/* @ts-ignore */}
                                <SelectItem value={category.value.toString()}>
                                  {category.label}
                                </SelectItem>
                              </div>
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
            type="button"
            size="sm"
            variant="outline"
            onClick={handleReset}
          >
            Reset
          </Button>
          {/* Search button: Will trigger form submission */}
          <Button type="submit" size="sm">
            {loadingSearch ? (
              <Image
                src="/assets/Loading.gif"
                alt="loading"
                width={10}
                height={10}
              />
            ) : (
              <SearchIcon />
            )}
            Search
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchForm;
