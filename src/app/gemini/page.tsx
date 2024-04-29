"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useChat } from "ai/react";
import Markdown from "./components/Mark-down";
const Page = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/gemini",
  });
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      {RenderForm()}
      {RenderMessages()}
      {/* {JSON.stringify(messages)} */}
    </div>
  );
  function RenderForm() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              prompt: input,
            },
          });
        }}
        className="flex w-full gap-2 h-full items-center"
      >
        <Input
          type="text"
          placeholder="search..."
          className="border-b border-dashed w-full px-4 py-2  focus:placeholder-transparent"
          value={input}
          onChange={handleInputChange}
        />
        <Button type="submit" className="rounded-full shadow-md border flex">
          <Send className="w-4 h-4" />
        </Button>
      </form>
    );
  }
  function RenderMessages() {
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, index) => {
          return (
            <div
              key={index}
              className={`p-4 shadow-md rounded-md ${
                m.role === "user" ? "bg-stone-300" : ""
              }`}
            >
              <Markdown text={m.content} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Page;
