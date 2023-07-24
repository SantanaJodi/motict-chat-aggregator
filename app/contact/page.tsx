import { IContact } from "@/src/modules/contact/types/contact-type";
import ContactView from "@/src/modules/contact/view/ContactView";

const getContactList = async () => {
  return new Array(1000).fill({
    name: "Anggih Nur Hidayat",
    phone_number: "+628851595612",
    channel: "whatsapp",
    last_activity: "12 Oktober 2022 at 14:00",
  } as IContact);
};

const ContactPage = async () => {
  const contact = await getContactList();
  return (
    <ContactView
      contact={[
        {
          name: "Joo Mien Teun",
          phone_number: "+628851595612",
          channel: "wa-unmasking",
          last_activity: "12 Oktober 2022 at 14:00",
        },
        {
          name: "Park su gi man",
          phone_number: "+6287831595612",
          channel: "whatsapp",
          last_activity: "12 Oktober 2022 at 14:00",
        },
        {
          name: "Soo Lee Hin",
          phone_number: "+6288519034854",
          channel: "shopee",
          last_activity: "12 Oktober 2022 at 14:00",
        },
      ]}
    />
  );
};

export default ContactPage;
