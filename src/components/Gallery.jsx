import getPhotoUrl from "get-photo-url";
import { BiAdjust } from "react-icons/bi";
import { ColorRing } from "react-loader-spinner";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useLiveQuery } from "dexie-react-hooks";
import db from "../db";

const Gallery = ({ color, setColor }) => {
  console.log(color);
  // second argument in the uselivequery() is the depemde
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };
  const removePhoto = async (id) => {
    db.gallery.delete(id);
  };
  return (
    <>
      <input type="file" name="photo" id="addPhotoInput" />
      <p
        onClick={() => setColor(!color)}
        className={`${
          color ? "change-color-button-dark" : "change-color-button"
        }`}
      >
        <BiAdjust />
      </p>
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i
          className={`${color ? "add-photo-button-dark" : "add-photo-button"}`}
        >
          <BsFillPlusSquareFill />
        </i>
        {/* <i className="change-color-button BiAdjust"></i> */}
      </label>

      {!allPhotos && (
          <div className="loader">
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          </div>          
        )}

      <section className={`${color ? "gallery-dark" : "gallery"}`}>
        {allPhotos?.map((picture) => (
          <div className="item" key={picture.id}>
            <img src={picture.url} className="item-image" alt="" />
            <button
              className="delete-button"
              onClick={() => removePhoto(picture.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Gallery;
// const addPhoto = async () => {
//   const newPhoto = {
//     id: Date.now(),
//     url: await getPhotoUrl("#addPhotoInput"),
//   };

//   setAllPhotos([newPhoto, ...allPhotos]);
// };
