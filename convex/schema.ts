import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  workspace: defineTable({
    name: v.string(),
    userId: v.string(),
    joiningCode: v.string(),
  }),
});

export default schema;
