import { dummySettingIntegration } from "@/src/dummy";
import { IntegrationView } from "@/src/modules/settings";

const getWhatsAppAccountList = async () => {
  // API: list for Whatsapp Account that already integrated
  return dummySettingIntegration;
};

const WhatsAppIntegration = async () => {
  const accounts = await getWhatsAppAccountList();
  return <IntegrationView accounts={accounts} />;
};

export default WhatsAppIntegration;
