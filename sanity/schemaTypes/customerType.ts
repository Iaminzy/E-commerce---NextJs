import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons"; 
export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,
  groups: [
    {
      name: "details",
      title: "Customer Details",
      default: true,
       icon: UserIcon,
    },
    {
      name: "stripe",
      title: "stripe",
    },
  ],
  fields: [
    defineField({
      name: "email",
      type: "string",
      group: "details",
      validation: (rule) => rule.required().error("Email is required"),
    }),
    defineField({
      name: "name",
      type: "string",
      group: "details",
      description: "The name of the customer",
    //   validation: (rule) => rule.required().error("Name is required"),
    }),
    defineField({
      name: "clerkUserId",
      type: "string",
      group: "details",
      description: "The clerk user id for user authentication",
    //   validation: (rule) => rule.required().error("Clerk user id is required"),
    }),
    defineField({
      name: "stripeCustomerId",
      type: "string",
      group: "stripe",
      description: "The stripe customer id for payment processing",
      validation: (rule) => rule.required().error("Stripe customer id is required"),
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      group: "details",
      description: "The date and time the customer was created",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      email: "email",
      name: "name",
      stripeCustomerId: "stripeCustomerId",
    },
    prepare({email, name, stripeCustomerId}) {
      return {
        title: name??email ??"Unknown Customer",
        subtitle: stripeCustomerId
        ?`${email ?? ""}. ${stripeCustomerId}`
        :email ?? "",
       
      }
    }
  },
  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Email A-Z",
      name: "emailAsc",
      by: [{ field: "email", direction: "asc" }],
    },
  ],
});
