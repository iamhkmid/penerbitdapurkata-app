import { link } from "fs/promises";
import React, { FC, useState, useCallback } from "react";
import Icons from "../../public/icons/Icons";

const accounts = [
  {
    id: "account1",
    name: "Facebook",
    link: "https://www.facebook.com/dapur.kata.77",
  },
  {
    id: "account2",
    name: "Instagram",
    link: "https://www.instagram.com/dapurkata.id/",
  },
  {
    id: "account3",
    name: "Twitter",
    link: "https://twitter.com/DapurKatadotid",
  },
  {
    id: "account4",
    name: "Gmail",
    link: "mailto:dapurkata.id@gmail.com?subject",
  },
  {
    id: "account5",
    name: "Whatsapp",
    link: "https://wa.link/lc00fi",
  },
];

const accountList = accounts.map((account) => (
  <span key={account.name}>
    <a href={account.link} key={account.id}>
      <div className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 mx-1">
        <Icons name={account.name} classname="h-6" />
      </div>
    </a>
  </span>
));

interface props {}

const SosialMedia: FC<props> = ({}): JSX.Element => {
  return <div className="flex pb-2">{accountList}</div>;
};

export default SosialMedia;
