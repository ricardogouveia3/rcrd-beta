export default function App() {
  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl p-6 lg:max-w-7xl lg:p-8">
        <header className="flex justify-center gap-3">
          <nav className="rounded-full bg-gray-800 flex border border-gray-700 p-2 max-w-lg">
            <ul className="flex gap-3">
              <li>
                <button className="text-white font-semibold rounded-full px-4 py-2 bg-gray-700 border border-gray-500">Home</button>
              </li>
              <li>
                <button className="text-white rounded-full px-4 py-2 hover:bg-gray-700">About</button>
              </li>
              <li>
                <button className="text-white rounded-full px-4 py-2 hover:bg-gray-700">Projects</button>
              </li>
              <li>
                <button className="text-white rounded-full px-4 py-2 hover:bg-gray-700">Posts</button>
              </li>
              <li>
                <button className="text-white rounded-full px-4 py-2 hover:bg-gray-700">Contact</button>
              </li>
            </ul>
          </nav>
          <button className="text-white font-semibold rounded-full px-4 py-1 bg-gray-700 border border-gray-500">toggle mode</button>
        </header>

        <div className="grid gap-4 m-4 sm:m-6 grid-cols-1 lg:grid-cols-4 lg:grid-rows-2">

          {/* Card 1: Spans 2 rows */}
          <div className="lg:row-span-2 rounded-lg bg-gray-800 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500 transition-all ease-in-out">
            <div className="p-8">
              <p className="text-lg/7 font-medium tracking-tight text-white text-center">
                Powerful APIs
              </p>
              <p className="text-sm/6 text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="lg:col-start-2 lg:col-span-1 rounded-lg bg-gray-800 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500 transition-all ease-in-out">
            <div className="p-8">
              <p className="text-lg/7 font-medium tracking-tight text-white text-center">
                Scalable Infrastructure
              </p>
              <p className="text-sm/6 text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="lg:col-start-3 lg:col-span-1 rounded-lg bg-gray-800 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500 transition-all ease-in-out">
            <div className="p-8">
              <p className="text-lg/7 font-medium tracking-tight text-white text-center">
                Scalable Infrastructure
              </p>
              <p className="text-sm/6 text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque.
              </p>
            </div>
          </div>

          {/* Card 4: Spans 2 columns on large screens */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-start-2 rounded-lg bg-gray-800 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500 transition-all ease-in-out">
            <div className="p-8">
              <p className="text-lg/7 font-medium tracking-tight text-white text-center">
                Fast Deployments
              </p>
              <p className="text-sm/6 text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
              </p>
            </div>
          </div>

          {/* Card 5: Spans 2 rows on large screens */}
          <div className="lg:row-span-2 rounded-lg bg-gray-800 flex h-full flex-col overflow-hidden border border-gray-700 hover:border-gray-500 transition-all ease-in-out">
            <div className="p-8">
              <p className="text-lg/7 font-medium tracking-tight text-white text-center">
                Advanced Security
              </p>
              <p className="text-sm/6 text-gray-400 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, lacus non auctor ultricies, ante neque gravida magna, lobortis pellentesque magna nunc sit amet neque. Morbi molestie auctor odio, sit amet dignissim dui eleifend in. Quisque euismod pharetra fringilla. Vivamus volutpat ipsum sed nibh mollis interdum. Quisque ut mattis lorem. Fusce vestibulum nulla id lacus dictum, in condimentum ante luctus. Fusce sagittis viverra bibendum. Donec pretium dolor elit, mattis ultricies nibh convallis eget. Vestibulum in orci et sem lobortis vehicula nec non urna.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
