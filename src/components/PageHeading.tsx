import {ReactNode} from "React"
interface Props {
    extraClasses: string
    children: ReactNode
  }
  
  const PageHeading: React.FC<Props> = ({ children, extraClasses }) => {
    const classes = "text-4xl text-green-900 font-semibold " + extraClasses
  
    return <h1 className={classes}>{children}</h1>
  }
  
  export default PageHeading