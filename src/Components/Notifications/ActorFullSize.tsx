import moment from "moment";
import 'moment/locale/es';
import { ActorNotification, CitizenNotification, FileBlob } from "../../Interfaces/Data";
import { NotificationFullSizeWrapper, Spinner } from "../Elements/StyledComponents";
import { AiOutlineClose, AiOutlineNotification } from "react-icons/ai";
import { BsFiletypeJpg, BsFiletypePdf } from "react-icons/bs";
import { LayoutSection, LayoutSpacer, LayoutStackedPanel, LayoutText } from "../Layout/StyledComponents";
import { Button } from "../Forms/Button";
import { fileTypes } from "../../Interfaces/FileTypes";
import { useContext, useEffect, useState } from "react";
import { NotificationsContext } from "../../Contexts/NotificationContext";
import { NotificationFile } from "./File";
import { MdOutlineAutoGraph } from "react-icons/md";

moment.locale('es')

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	data: ActorNotification,
  func: Function
}


export const NotificationActorFullSize: React.FC<Props> = ({data, func, ...props}) => {
  
  const { GetAttachments, GetScopeByID } = useContext(NotificationsContext);
  const [ isLoadingFiles, setIsLoadingFiles ] = useState<boolean>(true)
  const [ isLoadingScope, setIsLoadingScope ] = useState<boolean>(true)
  const [ Files, setFiles ] = useState<FileBlob[]>([])
  const [ scope, setScope ] = useState<number>(0)

  const handleFiles = async () => {
    try{
      const responses = await GetAttachments(data.ATTACHMENTS, setIsLoadingFiles)
      setFiles(responses)

    } catch(e:any){
      console.log(e)
      setFiles([
        {
            "name": "Hubo un error al cargar los datos",
            "type": "null",
            "data": ""
        }
    ])
    }
  }

  const handleScope = async () => {
    const responses:any = await GetScopeByID(data.ID, setIsLoadingScope)
    setScope(responses.data.data.notification_reached)
    //setScope(responses)
  }

  useEffect(()=>{
    if(data.ATTACHMENTS.length>0) handleFiles()
    handleScope()
  },[])


  return <NotificationFullSizeWrapper>
    <LayoutSection className="content">
      <div className="header">
        <span className="title"><AiOutlineNotification />Gobierno de Entre Ríos</span>
        <span className="time">{moment(data.CREATED_AT).fromNow()}</span>
        <span className="flex-1"></span>
        <span className="close" onClick={()=>func()}><AiOutlineClose fontSize={"1rem"}/></span>
      </div>
      <h1>{data.MESSAGE_TITLE}</h1>
      <p>{data.MESSAGE_BODY}</p>
      <div className="scope">
        <span className="data">{isLoadingScope
        ?<><Spinner color='gray' size="0.7rem"/><span><b>Cargando alcance</b>. Por favor aguarde.</span></>
        :<><MdOutlineAutoGraph /> {scope} personas alcanzadas </>
        }</span>
      </div>
        {data.ATTACHMENTS.length>0 ? <div className="attachments">
          <h2>Archivos adjuntos</h2>
          
          {isLoadingFiles
            ?<div className="loader">
              <Spinner color='gray' size="1.5rem"/>
              <span className="flex-1"><b>Cargando archivos</b>. Por favor aguarde.</span>
            </div>
            :<div className="files">{Files.map((e:FileBlob)=><NotificationFile data={e}/>)}</div>
          }
        </div>: <></>}
      <LayoutStackedPanel className="mt-2">
        <LayoutSpacer/>
        <Button onClick={()=>func()}>Cerrar</Button>
      </LayoutStackedPanel>
    </LayoutSection>
    <LayoutSpacer/>
  </NotificationFullSizeWrapper>
}