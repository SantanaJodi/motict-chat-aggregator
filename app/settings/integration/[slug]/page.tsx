import { dummySettingIntegration } from "@/src/dummy";
import { IWhatsAppAccount } from "@/src/modules/settings";
import WhatsAppAccountSettingView from "@/src/modules/settings/view/integration/WhatsAppAccountSettingView";
import { IPageServerProps } from "@/src/types/common-types";

const getWhatsAppAccount = async (whatsappNumber: string) => {
  const findByNumber = (dummySettingIntegration as IWhatsAppAccount[]).filter(
    (item) => item.whatsappNumber === whatsappNumber
  );
  return findByNumber[0];
};

const WhatsAppAccountSettingPage = async ({ params }: IPageServerProps) => {
  const account = await getWhatsAppAccount(params.slug);
  return <WhatsAppAccountSettingView account={account} />;
};

export default WhatsAppAccountSettingPage;
