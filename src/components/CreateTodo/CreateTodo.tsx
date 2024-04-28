/* eslint-disable @typescript-eslint/no-unused-vars */

import { addTodo } from "../../redux/actions";
import { Input } from "../Input/Input";
import css from './CreateTodo.module.css';
import { customAlphabet } from 'nanoid/non-secure'
import { useDispatch } from "react-redux";
import { RiCopyrightLine } from "react-icons/ri";
import { useState } from "react";

const nanoid = customAlphabet('1234567890', 6);

export const CreateTodo = () => {
  const dispatch = useDispatch();
  const [formValid, setFormValid] = useState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const title = form.get('title') as string;
    const description = form.get('description') as string;
    const purpose = form.get('purpose') as string;
    const randomId = nanoid() as unknown as number;

    const todo = {
      id: randomId,
      title,
      description,
      purpose,
      done: false,
      deleted: false,
    };

    if (title && description && purpose !== '') {
      dispatch(addTodo(todo));
      e.currentTarget.reset();
      setFormValid(false);
    } else {
      alert('Please fill in all fields');
    };
  };

  const handleChange = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    setFormValid(form.checkValidity());
  };

  
  
  return (
    <>
      <h1 className={css.welcome}>Welcome to the planner</h1>
      <p className={css.slogan}>just do it</p>
    <form className={css.form} onSubmit={onSubmit} onChange={handleChange} noValidate>
      <div className={css.container}>
          <Input
            labelText="Title"
            inputName="title"
            required
          />
          <Input
            labelText="Detail"
            inputName="description"
            required
          />
          <div className={css.radioBtn}>
            <Input
              labelText="work"
              inputName="purpose"
              inputType="radio"
              inputValue='work'
              required
            />
            <Input
              labelText="personal"
              inputName="purpose"
              inputType="radio"
              inputValue='personal'
              required
            />
            <Input
              labelText="education"
              inputName="purpose"
              inputType="radio"
              inputValue='education'
              required
            />
            <Input
              labelText="other"
              inputName="purpose"
              inputType="radio"
              inputValue='other'
              required
            />
          </div>
        </div>
      <button type="submit" className={css.btn} >
        Add to list
      </button>
      </form>
      <p className={css.copyright}><RiCopyrightLine />made by Anastasia Andrusenko</p>
    </>
  );
};
