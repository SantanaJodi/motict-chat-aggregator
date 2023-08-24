import { IntegrationView } from "@/src/modules/settings";

const getWhatsAppAccountList = async () => {
  // API: list for Whatsapp Account that already integrated
  return [
    {
      badge: "",
      token: "isdfj894509hfsfsad928fndasi898978bdlkw4md89",
      whatsappName: "Wikitoko",
      whatsappNumber: "081234567890",
      whatsappServerUrl: "https://graph.facebook.com",
      isSupportSSL: false,
      isActive: false,
    },
    {
      badge: "",
      token: "akfjno7h34ro783hfasuilfhlanaho873tra349",
      whatsappName: "TokoWiki",
      whatsappNumber: "089234892333",
      whatsappServerUrl: "https://graph.facebook.com",
      isSupportSSL: false,
      isActive: true,
    },
    {
      badge: "",
      token: "asdadn2873r23fsadfn2a",
      whatsappName: "Toko Toko",
      whatsappNumber: "089234234234",
      whatsappServerUrl: "https://graph.facebook.com",
      isSupportSSL: false,
      isActive: true,
    },
  ];
};

const WhatsAppIntegration = async () => {
  const accounts = await getWhatsAppAccountList();
  return <IntegrationView accounts={accounts} />;
};

export default WhatsAppIntegration;
