import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="lg:flex lg:bg-white lg:m-auto lg:justify-center">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="Valentines" />
      <Button name="Live" />
    </div>
  );
};

export default ButtonList;
