import { createSignal, createResource, For, Show, Suspense } from 'solid-js';

export default function Schedule() {
  const [slug, setSlug] = createSignal(false);

  // This is the basic thing to fetch data from an api

  const [schedule] = createResource(async () => {
    return await fetch('https://www.learnwithjason.dev/api/schedule').then(
      (res) => {
        return res.json();
      }
    );
  });

  const [episode] = createResource(slug, async (slug) => {
    if (!slug) return;
    return await fetch(
      `https://www.learnwithjason.dev/api/episode/${slug}`
    ).then((res) => {
      return res.json();
    });
  });

  const handleSelect = (event: any) => {
    if (event.target.value === '') setSlug(false);
    setSlug(event.target.value);
    // return episode();
  };

  return (
    <>
      <div style="border:solid 1px #ff0000; padding:1em; margin:1em;">
        <div>This component fetches data from an api</div>
        <div>api: https://www.learnwithjason.dev/api/schedule</div>
        <code>{JSON.stringify(schedule(), null, 2)}</code>
        <ul>
          <For each={schedule()}>
            {
              //This is automatically keyed instead of React where you need the key={item.id}
              (item: any) => <li>{item.title}</li>
            }
          </For>
        </ul>
      </div>

      <div style="border:solid 1px #ff00ff; padding:1em; margin:1em;">
        <div>This component fetches data from an api</div>
        <div>api: https://www.learnwithjason.dev/api/epsisode/[slug]</div>
        <div>Slug: {slug()}</div>
        <select onChange={handleSelect}>
          <option value="">select</option>
          <For each={schedule()}>
            {
              //This is automatically keyed instead of React where you need the key={item.id}
              (item: any) => (
                <option value={item.slug.current}>{item.title}</option>
              )
            }
          </For>
        </select>
        <div>
          <Suspense fallback={<p>loading...</p>}>
            <Show when={episode()}>{JSON.stringify(episode())}</Show>
          </Suspense>
        </div>
      </div>
    </>
  );
}
