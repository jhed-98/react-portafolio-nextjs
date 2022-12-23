import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { sendContactForm } from "../lib/api";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues };

const contact = () => {
  const toast = useToast();

  const [state, setState] = useState(initState);

  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      MySwal.fire({
        // title: <strong>Message sent.</strong>,
        title: <strong>Mensaje enviado.</strong>, 
        showConfirmButton: false,
        icon: "success",
        timer: 2000, 
      });
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <section className="text-gray-600 relative mb-24">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {error && (
              <Text
                color="red.300"
                className="text-gray-600 dark:text-gray-100"
                fontSize="xl"
              >
                {error}
              </Text>
            )}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <FormControl
                isRequired
                isInvalid={touched.name && !values.name}
                className="relative"
              >
                <FormLabel className="leading-7 text-sm text-gray-600 dark:text-gray-100">
                  Name
                </FormLabel>
                <Input
                  type="name"
                  name="name"
                  errorBorderColor="red.300"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormErrorMessage className="text-gray-600 dark:text-gray-100">
                  Name is required.
                </FormErrorMessage>
              </FormControl>
            </div>

            <div className="p-2 w-1/2">
              <FormControl
                isRequired
                isInvalid={touched.email && !values.email}
                className="relative"
              >
                <FormLabel className="leading-7 text-sm text-gray-600 dark:text-gray-100">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormErrorMessage className="text-gray-600 dark:text-gray-100">
                  Email is required.
                </FormErrorMessage>
              </FormControl>
            </div>
            <div className="p-2 w-full">
              <FormControl
                isRequired
                isInvalid={touched.message && !values.message}
                className="relative"
              >
                <FormLabel className="leading-7 text-sm text-gray-600 dark:text-gray-100">
                  Message
                </FormLabel>
                <Textarea
                  type="text"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <FormErrorMessage className="text-gray-600 dark:text-gray-100">
                  Message is required.
                </FormErrorMessage>
              </FormControl>
            </div>
            <div className="p-2 w-full">
              <Button
                isLoading={isLoading}
                disabled={!values.name || !values.email || !values.message}
                onClick={onSubmit}
                className="flex mx-auto w-full text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label   className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label   className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                Send Message
              </button>
            </div>
       
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default contact;
