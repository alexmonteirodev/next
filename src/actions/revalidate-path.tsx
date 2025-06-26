"use server";

import { revalidatePath, revalidateTag } from "next/cache";

//revalidatePath
export async function revalidatePathAction(path: string) {
  revalidatePath(path);
}

//revalidateTags
export async function revalidateTagAction(tag: string) {
  revalidateTag(tag);
}
