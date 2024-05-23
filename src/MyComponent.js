import * as React from "react";

export default function MyComponent() {
  return (<>
    <script src="https://cdn.tailwindcss.com"></script>
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col gap-5 justify-between items-end px-6 pt-20 pb-6 w-full min-h-[433px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e9f60ff933c9d865ac18ba34c539c5ec1108a4bc1f1ae4f67ab42acb2ad469f?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col justify-center p-6 mt-44 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full text-blue-900 w-[287px]">
              <div className="text-xl font-bold">
                Click here to modify event title
              </div>
              <div className="flex gap-1 mt-1 text-xs">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/43aaedc90e084c9f1003d5ff44ac5d26639753ebe308001907975e357c19ac61?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                  className="shrink-0 w-4 aspect-square"
                />
                <div>Event date: TBD</div>
              </div>
            </div>
            <div className="flex flex-col mt-3 text-xs text-indigo-400 max-md:max-w-full">
              <div className="max-md:max-w-full">Status</div>
              <div className="flex gap-0 justify-between max-md:flex-wrap">
                <div className="flex gap-0 font-bold whitespace-nowrap text-blue-950">
                  <div className="justify-center px-3 py-2 bg-cyan-400 rounded-lg">
                    Draft
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a0496e0eddab0fce2ccdc14c10c66c77c78e83dee0c6e453e524d4084a4fd54?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 border border-cyan-400 border-solid aspect-[0.28] fill-cyan-400 stroke-[1px] stroke-cyan-400 w-[9px]"
                  />
                </div>
                <div className="flex gap-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc0dfcee6fab7073b1c5c93442b93035fb958de180490a931bb20dcc34d3afa?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 aspect-[0.28] fill-slate-100 w-[9px]"
                  />
                  <div className="justify-center px-3 py-2 bg-slate-100">
                    Under review
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7609aaad3e61b81d076449964d2e8fea65a18c70ee0b7966af7a9b67e5fe7f0c?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 border border-solid aspect-[0.28] border-slate-100 fill-slate-100 stroke-[1px] stroke-slate-100 w-[9px]"
                  />
                </div>
                <div className="flex gap-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/67d1fa9cbe36857c84158a6b3ceb36f797151785eda42c29658854f915446c02?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 aspect-[0.28] fill-slate-100 w-[9px]"
                  />
                  <div className="justify-center px-3 py-2 bg-slate-100">
                    Open event
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d7baf41192f0331ae17f7e2a79702993b8de77766822c9143bff614e5a8b26?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 border border-solid aspect-[0.28] border-slate-100 fill-slate-100 stroke-[1px] stroke-slate-100 w-[9px]"
                  />
                </div>
                <div className="flex gap-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e356813ce3702320d98db992bdfef3047ffd0a97a4e682aa822825bf4d7ac3ff?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 aspect-[0.28] fill-slate-100 w-[9px]"
                  />
                  <div className="justify-center px-3 py-2 bg-slate-100">
                    Attendance confirmed
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc982206cd8d9f4c54c038d97332d694bb247c6f58617f5fc3b6875ae6397b98?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 border border-solid aspect-[0.28] border-slate-100 fill-slate-100 stroke-[1px] stroke-slate-100 w-[9px]"
                  />
                </div>
                <div className="flex gap-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1aa0566dce580ab8e0c6101c1185ecf18aa10e2089d99ed452d4787b51ba2c?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 aspect-[0.28] fill-slate-100 w-[9px]"
                  />
                  <div className="justify-center px-3 py-2 bg-slate-100">
                    Pending documentation
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad9dc4095d9456f1d535149f4f47481ac455979575fde6e17a960758a9800a65?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-2 border border-solid aspect-[0.25] border-slate-100 fill-slate-100 stroke-[1px] stroke-slate-100"
                  />
                </div>
                <div className="flex gap-0 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4f59ca54b09700fe0a7d37dce25637152e901b50a26b80213f6ccd803ae149d?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 aspect-[0.28] fill-slate-100 w-[9px]"
                  />
                  <div className="justify-center px-3 py-2 bg-slate-100">
                    Completed
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91346f9a4910fbc4cae3ba86d7fbccdba0ce7ac20dc9b171d363764ea728bf1a?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 border border-solid aspect-[0.28] border-slate-100 fill-slate-100 stroke-[1px] stroke-slate-100 w-[9px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col justify-center px-6 py-4 mt-64 text-xs font-bold text-blue-900 uppercase bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:mt-10">
            <div className="justify-center px-3.5 py-2.5 rounded-lg border border-blue-900 border-solid">
              upload cover image
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-start px-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <div className="flex flex-col text-sm font-extrabold text-blue-900 uppercase">
              <div>event details</div>
              <div className="shrink-0 mt-1 h-0.5 bg-teal-500" />
            </div>
            <div className="flex flex-col items-start pt-1.5 pb-3">
              <div className="shrink-0 w-2 h-2 bg-orange-600 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="pb-1.5 text-sm font-extrabold text-indigo-400 uppercase">
              schedule & itinerary
            </div>
            <div className="flex flex-col px-0.5 pt-1.5 pb-3">
              <div className="shrink-0 w-2 h-2 bg-orange-600 rounded-full" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="pb-1.5 text-sm font-extrabold text-indigo-400 uppercase whitespace-nowrap">
              Guests
            </div>
            <div className="flex flex-col items-start pt-1.5 pb-3">
              <div className="shrink-0 w-2 h-2 bg-orange-600 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col justify-center mt-4 text-sm font-extrabold text-indigo-400 uppercase">
            <div className="pb-1.5">history & comments</div>
          </div>
          <div className="flex flex-col justify-center mt-4 text-sm font-extrabold text-indigo-400 uppercase">
            <div className="pb-1.5">Post event summary</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center self-stretch max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col justify-center px-6 py-4 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col justify-center max-md:max-w-full">
                <div className="flex gap-3 text-blue-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold uppercase">
                    requested by
                  </div>
                  <div className="flex-1 justify-center items-start px-3 py-4 text-xs max-md:pr-5">
                    Jason RIPPER
                  </div>
                </div>
                <div className="flex gap-3 mt-2 text-blue-900 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold uppercase">
                    title
                  </div>
                  <div className="flex-1 justify-center items-start p-3 text-xs rounded-lg max-md:pr-5">
                    Title
                  </div>
                </div>
                <div className="flex gap-3 mt-2 text-blue-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold uppercase">
                    Associate’s segment
                  </div>
                  <div className="flex-1 justify-center items-start p-3 text-xs rounded-lg bg-slate-100 max-md:pr-5">
                    Mars Global Services
                  </div>
                </div>
                <div className="flex gap-3 mt-2 text-blue-900 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold uppercase">
                    e-mail
                  </div>
                  <div className="flex-1 justify-center items-start p-3 text-xs underline rounded-lg max-md:pr-5">
                    jason.ripper@effem.com
                  </div>
                </div>
                <div className="flex gap-3 mt-2 text-xs text-blue-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold uppercase">
                    phone
                  </div>
                  <div className="flex gap-3 justify-between p-3 whitespace-nowrap rounded-lg bg-slate-100">
                    <div>+1</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c4fad17754180381b28f49edc85768dc91039fe46b07dbca163b87a2c0852f1?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 w-4 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center text-indigo-400">
                    <div className="justify-center items-start px-3 py-4 rounded-lg bg-slate-100 max-md:pr-5">
                      Insert phone number
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold tracking-normal text-blue-900 uppercase">
                    Event Co-host name <br />
                    <span className="text-xs tracking-normal leading-3 ">
                      Optional
                    </span>
                  </div>
                  <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                    Insert a name
                  </div>
                </div>
                <div className="flex gap-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                    Event Co-host email
                    <br />
                    <span className="text-xs leading-3 ">Optional</span>
                  </div>
                  <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                    Insert a e-mail
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center mt-3 rounded-lg max-md:max-w-full">
              <div className="flex flex-col px-6 py-4 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                    Event date
                  </div>
                  <div className="flex gap-5 justify-between p-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                    <div>Pick event dates</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43aaedc90e084c9f1003d5ff44ac5d26639753ebe308001907975e357c19ac61?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 w-4 aspect-square"
                    />
                  </div>
                </div>
                <div className="flex gap-3 py-1.5 pr-20 mt-2 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="text-xs font-extrabold text-blue-900 uppercase">
                    Is the event date flexible ?
                  </div>
                  <div className="flex flex-col justify-center my-auto">
                    <div className="flex flex-col justify-center items-start px-4 py-0.5 bg-blue-900 rounded-3xl">
                      <div className="shrink-0 w-4 h-4 bg-teal-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-4 mt-3 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  affiliated site code
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                  <div>Select a site code</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0da6850ab027097f3be861c2d4e5398fadab5a4cf9af7d064cfb1ccb63ff6dc0?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-3 pl-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  please specify
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                  Type something
                </div>
              </div>
              <div className="flex gap-3 mt-2 max-md:flex-wrap">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  Country
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                  <div>Select a country</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de172e7b3c5297be39d4bf9fc39729e8badffd91e92c10eb8c0f659bcb9430?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-2 text-xs text-indigo-400 max-md:flex-wrap">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  City
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 rounded-lg bg-slate-100">
                  <div>Select a state</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e70f2e67e7cde1aa92b384f7dfbd7493e92ad3c5b3db93881c95d6a657285b58?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 rounded-lg bg-slate-100">
                  <div>Select a city</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de172e7b3c5297be39d4bf9fc39729e8badffd91e92c10eb8c0f659bcb9430?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  Event venue name
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                  Type something
                </div>
              </div>
              <div className="flex gap-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  Event venue adDress
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                  Type something
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-4 mt-3 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 max-md:flex-wrap">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  event type
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                  <div>Select a type</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de172e7b3c5297be39d4bf9fc39729e8badffd91e92c10eb8c0f659bcb9430?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-2 max-md:flex-wrap">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  event format
                </div>
                <div className="flex flex-1 gap-5 justify-between p-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                  <div>Select a format</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88de172e7b3c5297be39d4bf9fc39729e8badffd91e92c10eb8c0f659bcb9430?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                    className="shrink-0 w-4 aspect-square"
                  />
                </div>
              </div>
              <div className="flex gap-3 pl-3 mt-2 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  please specify
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                  Type something
                </div>
              </div>
              <div className="flex flex-col justify-center mt-2 max-md:max-w-full">
                <div className="flex gap-3 max-md:flex-wrap">
                  <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                    last family member visit
                  </div>
                  <div className="flex flex-1 gap-5 justify-between px-3 py-3 text-xs text-indigo-400 rounded-lg bg-slate-100">
                    <div>Select a range</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcad8471ee44df4c87dcdeea9c27f955f49599a4dc31f415db00230dd278a64b?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                      className="shrink-0 w-4 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center px-6 py-4 mt-3 bg-white rounded-lg border border-solid border-slate-200 max-md:px-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="text-xs font-extrabold text-blue-900 uppercase max-md:mt-3">
                      Associate(s) expected at event
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center px-3 py-2.5 mx-auto w-full text-xs font-bold text-blue-900 rounded-lg bg-slate-100 max-md:mt-3">
                      <div className="flex flex-col justify-center items-start max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Corporate</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-3 max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Food & Nutrition</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-3 max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Global Services</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-3 max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-1">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Multisales</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-3 max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-0.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Snacking</div>
                        </div>
                      </div>
                      <div className="flex gap-1.5 mt-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea1b14da43f0282624d64b8ae10efad276e71972c6b570c4763d91b782bd875?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                          className="shrink-0 my-auto w-2 aspect-square"
                        />
                        <div>MARS Petcare</div>
                      </div>
                      <div className="flex flex-col justify-center items-start mt-3 max-md:pr-5">
                        <div className="flex gap-1.5 justify-end py-0.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/14722628ed2be683ddb192aafbc4de6b20fe357b1ae719cb22b86e18f09bfab9?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
                            className="shrink-0 self-start w-2 aspect-square"
                          />
                          <div>MARS Veterineray Health</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold text-blue-900 uppercase">
                  estimated total number of attendees
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs text-indigo-400 rounded-lg bg-slate-100 max-md:pr-5">
                  Type an estimation
                </div>
              </div>
              <div className="flex gap-3 mt-6 text-blue-900 max-md:flex-wrap max-md:max-w-full">
                <div className="my-auto text-xs font-extrabold uppercase">
                  estimated MARS Petcare attendees
                </div>
                <div className="flex-1 justify-center items-start p-3 text-xs whitespace-nowrap rounded-lg bg-slate-100 max-md:pr-5">
                  999
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20b94ba7b1ea8768061e5c664bbfee1dd0e55a4554d56a49caa98a0ab55dccca?apiKey=610c79b85ccd45d1af1ac6849554c6b4&"
          className="flex-1 w-full border border-solid aspect-[0.72] border-slate-200 max-md:max-w-full"
        />
      </div>
    </div>
    </>
  );
}

