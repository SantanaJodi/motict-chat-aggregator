"use client";

import { PeoplesIcon } from "@/public/icons/outline";
import { ContactHeader, Container } from "@/src/components";
import StatesContainer from "@/src/components/organism/StatesContainer";
import React, { useEffect, useState } from "react";

interface ContactViewProps {}

const ContactView: React.FC<ContactViewProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [channel, setChannel] = useState("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <div className="w-full h-full flex flex-col">
        <ContactHeader
          search={search}
          channel={channel}
          onSearch={(val) => setSearch(val)}
          onSelectChannel={(val) => setChannel(val)}
        />
        <div className="w-full h-full relative">
          <StatesContainer
            isLoading={isLoading}
            isEmpty={!contacts.length}
            isError={error}
            EmptyIcon={PeoplesIcon}
            onReload={() => alert("reload")}
            emptyMsg="You don’t have any contact"
            noResult={!!search && !contacts.length}
            disableErrorToast
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactView;
