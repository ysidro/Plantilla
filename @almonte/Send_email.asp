<%
' Autor:       Noel Rúa Matos
' Date:        20/02/2012
' Description: Script que envia correos a los clientes de webhostings a través de sus formularios de contacto.            
'              Revisar comentarios marcados con *PARAMETRO, estos parámetros deben ser seteados para cada cliente / server.
 
Const cdoSendUsingPickup = 1 'Enviar usando el SMTP local.
Const cdoSendUsingPort = 2 'Enviar email usando la red. (SMTP over the network). 

Const cdoAnonymous = 0 'Do not authenticate
Const cdoBasic = 1 'basic (clear-text) authentication
Const cdoNTLM = 2 'NTLM

dim htmlBody

'*PARAMETRO: NOMBRE DEL CLIENTE
nombreNegocio = ""

'*PARAMETRO: DESTINATARIOS SEPARADOS POR ; (PUNTO Y COMA)
destinatario = ""


if request.querystring("email") <> "" then
    emailfrom = request.querystring("email")   
else
    emailfrom = " "
end if   


Set objMessage = CreateObject("CDO.Message") 
objMessage.Subject = "Message sent through "  + nombreNegocio
objMessage.From = nombreNegocio+" "+ "<"+emailfrom+">"
objMessage.To = destinatario 
objMessage.HTMLBody  = "<div>"+SetHtmlBody()+"<div>"

objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2 

'*PARAMETRO: SMTP del servidor
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserver") = "mail2.axesa.com"


objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = cdoBasic

'*PARAMETRO: NOMBRE DE USUARIO DE LA CUENTA QUE AUTENTICA
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendusername") = "sender@axesaonline.com"

'*PARAMETRO: CONTRASEÑA DE LA CUENTA QUE AUTENTICA
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "digital#2012"

'*PARAMETRO: PUERTO PARA ENVIO DE CORREOS (GENERALMENTE 25)
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25 

'*PARAMETRO: HABILITADOR O NO SSL
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpusessl") = False

'*PARAMETRO: TIMEOUT PARA INTENTAR ENVIAR EL CORREO ( EN SEGUNDOS)
objMessage.Configuration.Fields.Item _
("http://schemas.microsoft.com/cdo/configuration/smtpconnectiontimeout") = 30

objMessage.Configuration.Fields.Update

on error resume next
objMessage.Send
if err<>0 then

Response.Write(err.Number&"<br />")
Response.Write(err.Description&"<br />")
Response.Write(err.Source&"<br />")
Response.Write("<br />El servicio de correo no esta disponible, trate mas tarde.<br/>")
else
response.write "Gracias por contactarnos, contestaremos lo antes posible."
end if


'==FIN DE LA CONFIGURACION==


'objMessage.Send
'Esto es para traducir los nombres de los campos
function SetHtmlBody()         
     dim campo,valor
     
     For Each Key in Request.QueryString
        campo = Key
        valor = URLDecode(Request.QueryString(Key))
        
        if campo = "fullname" then
            campo = "Nombre Completo"            
        end if
        
        if campo = "email" then
            campo = "Correo electrónico"
        end if
        
        if campo = "phone" then
            campo = "Teléfono"
        end if
        
        if Key = "cellular" then
            Key = "Móvil"
        end if
        
        if Key = "companyname" then
            Key = "Nombre De Compañía"
        end if
        
        if Key = "" then
            Key = ""
        end if  
        
        dim contenthtml
        contenthtml = contenthtml + "<span>"+ campo + ": " + valor + "</span>"
        contenthtml = contenthtml + "<br/>"
        
        SetHtmlBody = contenthtml
     Next
end function

Function URLDecode(str) 
    str = Replace(str, "+", " ") 
    For i = 1 To Len(str) 
        sT = Mid(str, i, 1) 
        If sT = "%" Then 
            If i+2 < Len(str) Then 
                sR = sR & _ 
                    Chr(CLng("&H" & Mid(str, i+1, 2))) 
                i = i+2 
            End If 
        Else 
            sR = sR & sT 
        End If 
    Next 
    URLDecode = sR 
End Function 
     
%>