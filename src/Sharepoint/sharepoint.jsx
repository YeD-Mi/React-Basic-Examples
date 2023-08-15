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
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvcmVua3Npc3RlbS5zaGFyZXBvaW50LmNvbUA3MDQ1NTc0NC00YWZkLTQ2NjktOTEwMS0zYzgwZmQ2NTM3NjkiLCJpc3MiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANzA0NTU3NDQtNGFmZC00NjY5LTkxMDEtM2M4MGZkNjUzNzY5IiwiaWF0IjoxNjkxMDQzODU0LCJuYmYiOjE2OTEwNDM4NTQsImV4cCI6MTY5MTEzMDU1NCwiaWRlbnRpdHlwcm92aWRlciI6IjAwMDAwMDAxLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMEA3MDQ1NTc0NC00YWZkLTQ2NjktOTEwMS0zYzgwZmQ2NTM3NjkiLCJuYW1laWQiOiIyMDAxNTE2Ny1jNWM2LTRhM2MtYjZhNi1kZjRiY2NiMzgyMmNANzA0NTU3NDQtNGFmZC00NjY5LTkxMDEtM2M4MGZkNjUzNzY5Iiwib2lkIjoiOGZmMDdlZGQtNjhkOS00ZGY5LWJlMDgtZGEzZmZhOTYxZGNjIiwic3ViIjoiOGZmMDdlZGQtNjhkOS00ZGY5LWJlMDgtZGEzZmZhOTYxZGNjIiwidHJ1c3RlZGZvcmRlbGVnYXRpb24iOiJmYWxzZSJ9.aroCRB5Qk3BxSM-H1nDrWlg5NmFLztrng9mQyGHCPR_z28bT2acDLn60IgG7bjNMFsEauoNxUeRqaPNTP8aJbsckWs-OqNe6XpJmEirteNHyfBB3KLCBbzLXCOCNwad91qIk7DEU5W4WLdWQ4GkIxzqnvOnjce7hcHUY7qlOodzAVITk5f4TYNVIBUlCSn7GKJhVT-SjmtEDtVU32AU23zMuLRufrgWZ7KnyfzJn3AXa0LHC6B9-9qliTgONDfBlk2nCgBLQ4LT8E6KBGHycxaX4ZIg2pG-wxxNiGzybPq6lHDfsZaJAV5t6cf7PyJ_CQ9IfsuC_MDWvR6LRaRzVWA'
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