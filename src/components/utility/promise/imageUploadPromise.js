import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);
export const imageUpload = async (image) => {
  return new Promise((resolve, reject) => {
    if (image === null) {
       reject(new Error("No file selected"));
       return;
    }
    const newName = Date.now() + image.name;
    supabase.storage.from('images').upload(newName, image, {
      upsert: false,
      cacheControl: "3600",
    }).then(() => {
      const response = supabase.storage.from('images').getPublicUrl(newName).data.publicUrl;
      resolve(response);
    }).catch(() => {
      reject("Supabse Error:");
    })
  });
};
