import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/store/slices/langSlice";
import { RootState } from "@/store/store"; // Замените на путь к вашему корневому редюсеру
import { AppDispatch } from "@/store/store"; // Замените на путь к вашему Redux store

import classes from "./langSelect.module.css";

const LangSelect: FC = () => {
  const [active, setActive] = useState<Boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const list = useSelector((state: RootState) => state.lang.langs);
  const listItem = useSelector((state: RootState) => state.lang.lang);

  const handleLangChange = (el: string) => {
    dispatch(setLang(el));
    setActive(false);
  };

  return (
    <div className={classes.LangSelect}>
      <span onClick={() => setActive(true)}>{listItem}</span>
      <div className={`${classes.list} ${active ? classes.active : ""}`}>
        {list.map((el: string, index: number) => (
          <span onClick={() => handleLangChange(el)} key={index}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LangSelect;