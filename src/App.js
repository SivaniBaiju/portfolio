import html5 from './html5.png';
import js from'./js.png';
import github from './github.png';
import css from './css.png';
import react from './react.png';
import tailwind from './tailwind.png';
import "./App.css";

function App() {
  const onClickNet = () => {
    // window.location.href = "https://netflixgpt-sivani.web.app/";
    window.open('https://netflixgpt-sivani.web.app/', '_blank', 'noreferrer');
  };

  const onClickGithub = () => {
    window.open('https://github.com/SivaniBaiju/NetflixGPT', '_blank', 'noreferrer');
    // window.location.href = "https://github.com/SivaniBaiju/NetflixGPT";
  };

  return (
    <div className="bg-slate-800 h-full w-full overflow-x-auto">
      <div className="h-full w-full flex flex-col sm:flex-row pt-20 items-center px-20">
        <div className="w-full sm:w-3/12 sm:ml-20 mx-auto">
          <img
            className="rounded-full w-30"
            src="https://media.licdn.com/dms/image/C5603AQHlhWlNdXgIJA/profile-displayphoto-shrink_800_800/0/1640974017013?e=1710374400&v=beta&t=LAeDRwQnRDkjIlsnpJFXrV7rUm4gmbXZLzfjMeCr8iM"
          />
        </div>
        <div className="w-full sm:w-9/12 sm:mx-10 mx-auto">
          <div className=" text-white mb-10 text-5xl">Sivani Baiju</div>
          <div className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-semibold text-lg ">
            Frontend developer who love to craft pixel perfect, responsive UI
            with great user experience
          </div>
          <div className="text-white text-sm mt-5">
           Contact me: sivanibaiju@gmail.com
          </div>
        </div>
      </div>

      <div className="text-2xl font-semibold px-20 mt-20 text-white">
        Personal Projects
      </div>
      <div
        className="ml-20 m-5 border-2 border-white w-5/12 text-white h-[200px] cursor-pointer"
        onClick={onClickNet}
      >
        <div className=" h-full w-full">
          <img
            className="h-full w-full object-cover  hover:scale-105"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          />
          <div className="relative font-extrabold bottom-10 text-red-700  bg-black  z-10">
            {" "}
            Netflix GPT
          </div>
        </div>
      </div>
      <div className="mb-60 ml-20 text-white">
        <div className="mt-2 text-xl"> Netflix GPT</div>
        <div className="mt-2 text-lg">
          {" "}
          1. Implemented firebase user authentication
        </div>
        <div className="mt-2 text-lg">
          {" "}
          2. Form validation done using Formik and Yup
        </div>
        <div className="mt-2 text-lg"> 3. Setup redux toolkit store</div>
        <div className="mt-2 text-lg"> 4. Used TailwindCSS for styling</div>
        <div className="mt-2 text-lg">
          {" "}
          5. Embedded the Yotube video and made it autoplay
        </div>
        <div className="mt-2 text-lg">
          {" "}
          6. Implemented dynamic API fetching from TMDB REST API for showing the
          movie list
        </div>
        <div className="mt-2 text-lg">
          {" "}
          7. Integrated openai GPT 3.5 search filter
        </div>
        <div className="flex">
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={onClickNet}
          >
            Demo
          </button>
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
            onClick={onClickGithub}
          >
            Github Link
          </button>
        </div>
      </div>

      <>
      <div className='text-white mb-10 text-2xl ml-20'> Skills </div>
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-10">
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img
              src={html5}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">HTML</p>
          </div>
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img
              src={css}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">CSS</p>
          </div>
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img
              src={js}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">JavaScript</p>
          </div>
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
            <img
              src={react}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">React</p>
          </div>
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img
              src={tailwind}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">Tailwind</p>
          </div>
          <div class="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
            <img
              src={github}
              alt=""
              class="w-20 mx-auto"
            />
            <p class="mt-4 text-white">GitHub</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
