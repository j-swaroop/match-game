import './index.css'

const FruitItems = props => {
  const {imageDetails, onclickTabItem} = props
  const {id, imageUrl, thumbnailUrl} = imageDetails

  const clickItem = () => {
    onclickTabItem(imageUrl)
  }

  return (
    <li className="image">
      <button onClick={clickItem} type="button">
        <img alt="thumbnail" className="thumbnail-image" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default FruitItems
