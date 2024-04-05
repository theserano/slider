import "./container.css";


interface ContainerProps {
    header: string,
    text: string,
    image: string,
    show: boolean,
}

const Container = ({header, text, image, show} : ContainerProps) => {

  return (
    <div className="container">

        <div className={`container_image ${show ? 'image_show' : 'image_hide'}`}>
            <img src={image} alt="image" />
        </div>

        <div className={`container_box`}>
            <div className={`container_header ${show ? 'header_show' : 'header_hide'}`}>{header}</div>
            <div className={`container_text ${show ? 'text_show' : 'text_hide'}`}><span>* </span>{text}</div>
        </div>
    </div>
  )
}

export default Container