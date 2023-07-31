import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sharepoint = () => {
  const [adSoyadList, setAdSoyadList] = useState([]);
  const [departmantList, setDepartmantList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://renksistem.sharepoint.com/sites/MrYed/_api/web/lists/getbytitle(\'Personel\')/items';
      const config = {
        headers: {
          'Accept': 'application/json;odata=nometadata',
          'Content-Type': 'application/json;odata=nometadata',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmVua3Npc3RlbS5zaGFyZXBvaW50LmNvbUA3MDQ1NTc0NC00YWZkLTQ2NjktOTEwMS0zYzgwZmQ2NTM3NjkiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANzA0NTU3NDQtNGFmZC00NjY5LTkxMDEtM2M4MGZkNjUzNzY5IiwiaWF0IjoxNjg5Mjg0MTcyLCJuYmYiOjE2ODkyODQxNzIsImV4cCI6MTY4OTM3MDg3MiwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEA3MDQ1NTc0NC00YWZkLTQ2NjktOTEwMS0zYzgwZmQ2NTM3NjkiLCJuYW1laWQiOiIyMDAxNTE2Ny1jNWM2LTRhM2MtYjZhNi1kZjRiY2NiMzgyMmNANzA0NTU3NDQtNGFmZC00NjY5LTkxMDEtM2M4MGZkNjUzNzY5Iiwib2lkIjoiOGZmMDdlZGQtNjhkOS00ZGY5LWJlMDgtZGEzZmZhOTYxZGNjIiwic3ViIjoiOGZmMDdlZGQtNjhkOS00ZGY5LWJlMDgtZGEzZmZhOTYxZGNjIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.PYhpS-hlrAHUPbUa63cnQjbOjI7g-GsRS_KvrRKepEN7c93H7RKZU3Mz8BwYzmBpndK3O_o124kLI6v0gHDOEvWjxfVcG_KDgc8ZcFzxNffnxZtPI3sE0FA_bYdxfQKMJYZuDuk5Lb2Wuj98qeklpMAYHesPx-P3-m_nBUZuQUp0jEvGaIFcNTRyu_cvkbTHUf5XlfG3IyC2ltsBY-ffXfxo9_eQuLptZULSTZBK_pVqYSytRLCAnY78V3ngWCx1LiXq9wE-C8nLgYh3PVQgFuidE7x7CuQ6SzO1of4Qf8_46jGhfwNQxfMKNr765WcEvaY5xc_KARcSaZKhGwmeAA'
          }
      };

      try {
        const response = await axios.get(url, config);
        const data = response.data.value;
        const SpstaffList = data.map(item => item.AdSoyad);
        const SpdepartmantList = data.map(item => item.Birim);
        setAdSoyadList(SpstaffList);
        setDepartmantList(SpdepartmantList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{display:'flex'}}>
    <div>
      {adSoyadList.map((name, index) => (
        <h1 key={index}>{index+1} - {name}</h1>
      ))}
    </div>
    <div style={{width:'1vw'}}></div>
    <div>
            {departmantList.map((name, index) => (
        <h1 key={index}>{name}</h1>
      ))}
    </div>
    </div>
  );
};

export default Sharepoint;