import React from "react";
// import "../css/style/services.css";

const Services = () => {
  return (
    <>
      <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
            <p class="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
              alt="Palm Springs Road"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
            <p class="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
              alt="Skyscrapers"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
            <p class="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>

        <div class="mx-3 mt-6 flex flex-col rounded-lg bg-black text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              class="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
            <p class="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
