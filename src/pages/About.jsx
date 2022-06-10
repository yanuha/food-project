function About() {
  return (
    <div className='center' bis_skin_checked='1'>
      <b>About</b>
      <br />
      <br /> TheMealDB was built in 2016 to provide a free data source api for
      recipes online <br />
      in the hope that developers would build applications and cool projects
      ontop of it. <br />
      TheMealDB originated on the{' '}
      <a href='https://forum.kodi.tv/showthread.php?tid=282387&amp;pid=2373121#pid2373121'>
        Kodi forums
      </a>{' '}
      as a way to browse recpies on your TV.
      <br />
      <br />
      Kodi Add-on
      <br />
      <a
        href='https://github.com/zag2me/script.screensaver.themealdb'
        bis_size='{"x":832,"y":391,"w":256,"h":19,"abs_x":832,"abs_y":391}'
      >
        <img
          src='https://raw.githubusercontent.com/zag2me/script.screensaver.themealdb/master/icon.png'
          alt=''
        />
      </a>
      <br />
      <br />
      <a href='https://kodi.tv/addon/screensaver/themealdb'>
        Available on the official Kodi repository
      </a>
      <br />
    </div>
  );
}

export { About };
