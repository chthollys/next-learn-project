"use client";

import { useActionState } from "react";
import ImagePicker from "@/components/image/ImagePicker";
import { shareMeal } from "~/lib/action";
import FormButton from "@/components/UI/FormButton";
import Input from "@/components/UI/Input";

import classes from "./page.module.css";

export default function ShareMealPage() {
  const [formState, formAction] = useActionState(shareMeal, {
    messages: null,
    errors: null,
  });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <div>
              <Input
                id="name"
                name="name"
                label="Your name"
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
              errorMsg={formState.errors?.fieldErrors.title?.[0]}
              required
            />
          </div>
          <div>
            <Input
              id="summary"
              name="summary"
              label="Short Summary"
              errorMsg={formState.errors?.fieldErrors.summary?.[0]}
              required
            />
          </div>
          <p>
            <Input
              textArea
              id="instructions"
              name="instructions"
              label="Instructions"
              rows={10}
              errorMsg={formState.errors?.fieldErrors.instructions?.[0]}
              required
            />
          </p>
          <ImagePicker name="image" label="Food's Image" />
          <p className={classes.actions}>
            <FormButton label="Share your meal" />
          </p>
        </form>
      </main>
    </>
  );
}
