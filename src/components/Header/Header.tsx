export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header className="bg-whit flex dark:bg-black">
    <div>jklasd2001</div>

    <div>
      <button
        className=""
        onClick={() => {
          localStorage.theme = 'dark'
        }}
      >
        다크모드
      </button>
      <button
        className=""
        onClick={() => {
          localStorage.theme = 'light'
        }}
      >
        노말모드
      </button>
    </div>
  </header>
)
