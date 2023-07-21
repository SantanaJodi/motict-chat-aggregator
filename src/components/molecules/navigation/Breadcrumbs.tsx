"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface IBreadcrumbsItems {
  path: string;
  label: string;
}

interface BreadcrumbsProps {
  items: IBreadcrumbsItems[];
}

const textClasses = "text-[14px] leading-[18.23px]";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const childrenWithSeparator = items.map((item, index) => {
    if (index !== items.length - 1) {
      return (
        <Link key={index} href={item.path}>
          <p className={clsx(textClasses, "text-[#8B9EB7] underline")}>
            {item.label}
          </p>
        </Link>
      );
    }
    return (
      <p key={index} className={clsx(textClasses, "text-[#0D0F12]")}>
        {"> "}
        {item.label}
      </p>
    );
  });

  return (
    <nav>
      <ul className="flex flex-row items-center gap-1">
        {childrenWithSeparator}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
