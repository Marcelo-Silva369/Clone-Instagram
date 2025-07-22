import { IoLogoFacebook } from "react-icons/io";

function App() {
  return (
    <>
      <div className="h-screen max-w-screen-md mx-auto overflow-x-hidden grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:gap-2 md:items-center place-items-center">
        {/* Imagem Principal */}
        <div className="row-span-5 hidden md:flex justify-center items-center">
          <img
            className="max-w-80 object-cover"
            src="https://i.ibb.co/NyVPXyk/insta-img.png"
            alt=""
          />
        </div>
        {/* Formulário */}
        <div className="max-w-80 row-span-5 flex flex-col justify-center items-center">
          <form
            className="w-80 flex justify-center items-center flex-col gap-4 border rounded-sm px-10 py-4 shadow-md mt-20"
            action=""
          >
            <img
              className="w-52"
              src="https://i.ibb.co/RCqjpL1/insta-logo.png"
              alt=""
            />

            <input
              className="bg-slate-100 border rounded-sm p-2 w-60"
              type="text"
              placeholder="Telefone, Usuário, Email"
            />
            <input
              className="bg-slate-100 border rounded-sm p-2 w-60"
              type="password"
              placeholder="Senha"
            />
            <button
              className="bg-blue-500 text-white hover:bg-blue-400 cursor-pointer rounded-md p-2 w-full"
              type="submit"
            >
              Entrar
            </button>

            <div className="flex items-center gap-1">
              <IoLogoFacebook className="text-blue-600 text-2xl" />
              <a
                className="text-blue-800 hover:text-blue-700 font-bold"
                href=""
              >
                Logar com o Facebook
              </a>
            </div>
            <a className="text-sm text-blue-600 hover:underline" href="">
              Esqueceu a senha?
            </a>
          </form>

          <div className="w-80 text-center mt-4 border rounded-sm px-10 p-4 shadow-md">
            <p className="">
              Não tem uma conta?{" "}
              <a
                className="text-blue-600 hover:underline font-bold text-sm"
                href=""
              >
                Cadastre-se
              </a>
            </p>
          </div>

          <p className="mt-2">Baixe o aplicativo</p>
          <div className="flex gap-4 mt-2">
            <img
              className="h-10"
              src="https://i.ibb.co/tcny7YV/apple.png"
              alt="App Store"
            />
            <img
              className="h-10"
              src="https://i.ibb.co/x7N4GwZ/google.png"
              alt="Google Play"
            />
          </div>
        </div>

        {/* Rodapé */}
        <footer className="row-span-1 col-span-2 flex flex-col items-center p-2">
          <ul className="flex flex-wrap gap-3 text-xs justify-center mt-3">
            <li className="">
              <a className="hover:text-blue-600 text-slate-400" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                blog
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Help
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                API
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Locatinos
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Instagram Lite
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Threads
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Contact Uploading and non-users
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600 text-slate-400" href="">
                Meta Verified
              </a>
            </li>
          </ul>

          <ul className="flex mt-3 flex-wrap gap-2 text-sm justify-center px-4">
            <li>
              <a className=" text-slate-500" href="">
                Português (Brasil)
              </a>
            </li>
            <li>
              <a
                className="hover:text-blue-600 text-slate-500"
                href="https://www.instagram.com/marcelotubarao_369/profilecard/?igsh=MW9jcDZyeWQxdnZxbQ=="
                target="_blank"
              >
                © 2025 Instagram Clone from Tubarão Dev
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
