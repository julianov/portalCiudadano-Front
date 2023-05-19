
import { Field, Form, Formik } from "formik";
import { FormikCheckbox } from "../../../Components/Forms/FormikCheckbox";
import { FormikImage } from "../../../Components/Forms/FormikImage";
import { FormikSearch } from "../../../Components/Forms/FormikSearch";
import { FormikButton } from "../../../Components/Forms/FormikButton";
import * as yup from 'yup';
import { useTable } from "react-table"
import { Spinner, Card, DivSubtitle, DivTitle2, NotificationCardWrapper, NotificationFullSizeWrapper } from '../../../Components/Elements/StyledComponents';
import { BiMessage } from "react-icons/bi";
import { LayoutSection, LayoutTitle, LayoutStackedPanel, LayoutSpacer } from "../../../Components/Layout/StyledComponents";
import { NotificationsContext } from "../../../Contexts/NotificationContext";
import { useContext, useState, useEffect, useMemo } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { ILocation } from "../../../Interfaces/Data";
import { IFormState } from "../../../Interfaces/Data";
import { DefaultFormState } from "../../../Data/DefaultValues";
import { RawLocations, LocationsFullPath, LocationByID, LocationFullPath, GetLocationByPath } from "../../../Utils/Locations";
import { formGetInitialValues, formGetValidations } from "../../../Interfaces/FormFields";
import { Button } from "../../../Components/Forms/Button";
import { IResponse, INotification } from "../../../Interfaces/Data";


import { Link } from "react-router-dom";
import { Pages } from "../../../Routes/Pages";
import { FormikField } from "../../../Components/Forms/FormikField";
import moment from "moment";
import { FormWrapperButton } from "../../../Components/Forms/StyledComponents";
import { Table } from "../../../Components/Elements/Table";
import { ColumnDef } from "@tanstack/react-table";


const FormRequiredFields = [
  'Recipients',
  'Age_From',
  'Age_To',
  'Notification_Date_From',
  'Notification_Date_To',
  'Locality',
  'Message_Title',
  'Message_Body',
];

interface Notificacion{
  ID: number,
  MESSAGE_TITLE: string,
  MESSAGE_BODY: string,
  VISTA: boolean,
}

export const DA_Notifications = () =>{

  const { GetAllNotifications, CreateNotification, userNotifications, actorNotifications } = useContext(NotificationsContext);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState<Notificacion[]>([]);
  const [notificacionCompleta, setNotificacionCompleta] = useState<Notificacion | null>(null);

  const [FormState, setFormState] = useState<IFormState>(DefaultFormState);
  const [FieldValues, setFieldValues] = useState(formGetInitialValues(FormRequiredFields));

  const { userData, userContact, userRol, SaveData, AFIP_getURL } = useContext(AuthContext);
  const [ LocationsValues, setLocationsValues ] = useState< ILocation[]>([]);



  useEffect(() => {
    if(userContact){
      if(userContact.LOCALITY_ID!==0 && LocationsValues.length>0){
        setFieldValues({...FieldValues, Locality: LocationFullPath(LocationByID(LocationsValues,userContact.LOCALITY_ID))})
      }
    }
  },[LocationsValues])

  useEffect(() => {
    
    RawLocations().then((response)=>{
      setLocationsValues(response)
    }).catch((e:any)=>{
      console.log(e)
    })

  },[userContact])
/*
  useEffect(() => {
      const getNotifications = async () => {
        const response = await GetAllNotifications();
        console.log(response)
        if(response.status){
          setMostrarNotificaciones(JSON.parse(response.response.data.notifications));
        }
        
        console.log(response)
        // console.log(mostrarNotificaciones)
      };
      getNotifications();
  }, []);*/


  function viewCompleteNotification(notificacion: Notificacion){
    // alert(`Título: ${notificacion.MESSAGE_TITLE}\n\nCuerpo: ${notificacion.MESSAGE_BODY}`);
    // notificacion.VISTA = true;
    setNotificacionCompleta(notificacion);
    setMostrarNotificaciones(prevmostrarNotificaciones =>
      prevmostrarNotificaciones.map(notif =>
        notif.ID === notificacion.ID ? { ...notif, VISTA: true } : notif
      )
    );
  }

  function cerrarNotificacionCompleta() {
    setNotificacionCompleta(null);
  }
  
  const mcolumns = useMemo<ColumnDef<INotification>[]>(()=>[
    {
      header: 'Fecha',
      accessorKey: 'CREATED_AT',
    },
    {
      header: 'Titulo',
      accessorKey: 'MESSAGE_TITLE',
    },
    {
      header: 'Mensaje',
      accessorKey: 'MESSAGE_BODY',
    }
  ],[]);

  return (<>
    <LayoutTitle>
      Notificaciones
    </LayoutTitle>
  </>)
}

/**/