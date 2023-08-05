"use client";
import { Breadcrumbs, Button, FieldInput, FieldSelect } from "@/src/components";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { FormProvider } from "react-hook-form";
import CreateUpdateViewModel from "../../model/agent/CreateUpdateViewModel";

interface CreateUpdateAgentViewProps {}

const CreateUpdateAgentView: React.FC<CreateUpdateAgentViewProps> = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const { formModule, onSave, handlePassword, showPassword } =
    CreateUpdateViewModel({ agentId: params?.id as string });
  return (
    <div className="w-full bg-white overflow-y-auto relative">
      <div className="p-6">
        <Breadcrumbs
          items={[
            {
              label: "Agent Management",
              path: "/settings/agent",
            },
            {
              label: "Create or Edit Agent",
              path: pathname || "",
            },
          ]}
        />
        <h2 className="font-bold text-xl text-[#0D0F12] mt-6">
          Create or Edit Agent
        </h2>
      </div>
      <FormProvider {...formModule}>
        <form onSubmit={formModule.handleSubmit(onSave)}>
          <div className="flex flex-col p-6 gap-8">
            <FieldInput name="name" label="Name" placeholder="Agent name" />

            <FieldInput name="email" label="Email" placeholder="Agent email" />
            <div className="flex flex-col gap-4">
              <FieldInput
                type={showPassword ? "text" : "password"}
                name="password"
                label="Password"
                placeholder="Create password for this agent"
              />
              <Button
                variant="link"
                color="#8B9EB7"
                label={showPassword ? "Hide Password" : "Show Password"}
                className="!flex !self-end"
                onClick={() => handlePassword(!showPassword)}
              />
            </div>
            <FieldSelect
              name="division"
              label="Division"
              options={[
                { label: "No Division", value: "no_division" },
                { value: "Operator", label: "Operator" },
              ]}
            />
            <FieldSelect
              name="channel"
              label="Channel"
              isMulti
              options={[
                {
                  label: "WhatsApp - Wikitoko",
                  value: "WhatsApp - Wikitoko",
                },
                {
                  label: "WhatsApp - Tokowiki",
                  value: "WhatsApp - Tokowiki",
                },
              ]}
            />
            <div className="flex flex-row gap-4 items-center self-end">
              <Button
                variant="ghost"
                label="Cancel"
                onClick={() => router.back()}
              />
              <Button
                type="submit"
                variant="primary"
                color="#323944"
                label="Save"
                disabled={!formModule.formState.isDirty}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateUpdateAgentView;
