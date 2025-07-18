"use client";

import { useActionState } from "react";
import ImagePicker from "@/components/image/ImagePicker";
import { shareMeal } from "~/lib/action";
import FormButton from "@/components/UI/FormButton";
import Input from "@/components/UI/Input";

import classes from "./page.module.css";

export default function ShareMealPage() {
  const [formState, formAction] = useActionState(shareMeal, {
    message: null,
    errors: null,
    data: null,
  });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
        {formState.message && (
          <p className="font-extralight tracking-wide text-red-500">
            {formState.message}
          </p>
        )}
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <div>
              <Input
                id="name"
                name="name"
                label="Your name"
                defaultValue={formState.data?.name}
                errorMsg={formState.errors?.fieldErrors.name?.[0]}
                required
              />
            </div>
            <div>
              <Input
                id="email"
                name="email"
                label="Your email"
                type="email"
                defaultValue={formState.data?.email}
                errorMsg={formState.errors?.fieldErrors.email?.[0]}
                required
              />
            </div>
          </div>
          <div>
            <Input
              id="title"
              name="title"
              label="Title"
              defaultValue={formState.data?.title}
              errorMsg={formState.errors?.fieldErrors.title?.[0]}
              required
            />
          </div>
          <div>
            <Input
              id="summary"
              name="summary"
              label="Short Summary"
              defaultValue={formState.data?.summary}
              errorMsg={formState.errors?.fieldErrors.summary?.[0]}
              required
            />
          </div>
          <div>
            <Input
              textArea
              id="instructions"
              name="instructions"
              label="Instructions"
              defaultValue={formState.data?.instructions}
              rows={10}
              errorMsg={formState.errors?.fieldErrors.instructions?.[0]}
              required
            />
          </div>
          <ImagePicker name="image" label="Food's Image" />
          <p className={classes.actions}>
            <FormButton label="Share your meal" />
          </p>
        </form>
      </main>
    </>
  );
}
