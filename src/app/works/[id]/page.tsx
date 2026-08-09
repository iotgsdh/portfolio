import WorkDetail from "@/components/work-detail";

export default async function Work({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  return (
    <main className="flex grow flex-col justify-center">
      <section className="p-4">
        <WorkDetail id={id} />
      </section>
    </main>
  );
}
