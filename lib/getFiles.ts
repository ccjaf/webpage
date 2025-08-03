import { createClient } from "@supabase/supabase-js";

// 🔧 Reemplaza con los datos de tu proyecto
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

const bucketName = "corpofolclore"; // cambia por el nombre real

export async function getFiles() {
  const { data, error } = await supabase.storage.from(bucketName).list("", {
    limit: 100,
  });

  if (error) {
    console.error("❌ Error al listar archivos:", error.message);
    return [];
  }

  const archivosConUrls = data.map((archivo) => {
    const publicUrl = supabase.storage
      .from(bucketName)
      .getPublicUrl(archivo.name).data.publicUrl;

    return {
      nombre: archivo.name,
      url: publicUrl,
    };
  });

  return archivosConUrls;
}
