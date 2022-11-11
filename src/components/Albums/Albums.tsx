import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import shallow from "zustand/shallow"
import { useLangContext } from "context/LangContext"

const Albums = () => {
  const { lang, internationalizeMessage } = useLangContext()
  const [isHydrated, setIsHydrated] = React.useState(false)
  const albums = useAlbumsStore((state) => state.albums)
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)
  // const sorted = albums.filter((album) => album.title !== "test")

  React.useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          {isHydrated ? (
            <tbody>
              {albums.length
                ? albums.map(({ id, title }) => (
                    <tr key={id}>
                      <th>{id}</th>
                      <td>{internationalizeMessage(title, lang)}</td>
                      <td>
                        <button
                          onClick={() => removeAlbum(id)}
                          className="btn btn-primary"
                        >
                          Remove
                        </button>
                        <button className="btn btn-secondary">
                          Best of The Best!
                        </button>
                      </td>
                    </tr>
                  ))
                : "Ooops... No albums found"}
            </tbody>
          ) : (
            "Loading..."
          )}
        </table>
      </div>
    </div>
  )
}

export default Albums
