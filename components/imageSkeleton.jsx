import ContentLoader from "react-content-loader"

const ImageSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#ffc2ec"
    foregroundColor="#ffe7e5"
    {...props}
  >
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default ImageSkeleton