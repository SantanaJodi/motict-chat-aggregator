"use client";

import { ContactDetail, ContactHistory, Container } from "@/src/components";
import React from "react";

interface DetailContactViewProps {}

const DetailContactView: React.FC<DetailContactViewProps> = () => {
  return (
    <Container>
      <div className="w-full h-full flex flex-row gap-[1px]">
        <ContactDetail />
        <ContactHistory />
      </div>
    </Container>
  );
};

export default DetailContactView;
