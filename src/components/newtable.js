import React from 'react';
import MaterialTable from 'material-table';
<<<<<<< HEAD
//import EditIcon from 'material-ui/svg-icons/image/edit';
//import Delete from 'material-ui/svg-icons/action/delete';
<<<<<<< HEAD
=======
=======
import * as serverfuncs from '../serverfuncs';
//import EditIcon from 'material-ui/svg-icons/image/edit';
//import Delete from 'material-ui/svg-icons/action/delete';
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe
import * as serverfuncs from '../serverfuncs';

var rows = [];
const users = serverfuncs.getAllUsers();;
for(var user in users) {
<<<<<<< HEAD
  console.log(user);
=======
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe
  var dict = {username: user.username, 
    name: user.name, 
    money: user.guilders, 
    paintings: user.numofpaintings,  
    value: 0,
    kudos: user.microresearchpoints};
<<<<<<< HEAD
  rows.push(dict);
};
console.log(rows);
=======
  rows.append(dict);
};
>>>>>>> 885a1a6620c54a4ea0972a8cfb67c15a4ed6dd4a
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
        { title: 'Username', field: 'username' },
      { title: 'Name', field: 'name' },
      { title: 'Money', field: 'money' },
<<<<<<< HEAD
      { title: 'Paintings', field: 'paintings', type: 'numeric' },
      { title: 'Value', field: 'value', type: 'numeric' },
      { title: 'Kudos', field: 'kudos' },
    ],
<<<<<<< HEAD
=======
    data: [
      { username: 'jopatrny', name: 'Julia Opatrny', money: 9000, paintings: 5, value: 200, kudos: 50 },
      { username: 'dholley', name: 'Donald Holley', money: 4000, paintings: 6, value: 400, kudos: 35 },
      { username: 'mjenkins', name: 'Matt Jenkins', money: 1500, paintings: 8, value: 350, kudos: 85 },
    ],
=======
      { title: 'Artworks', field: 'artworks', type: 'numeric' },
      { title: 'Value', field: 'value', type: 'numeric' },
      { title: 'Kudos', field: 'kudos' },
    ],
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe
    rows,//: [
    //   { username: 'jopatrny', name: 'Julia Opatrny', money: 9000, paintings: 5, value: 200, kudos: 50 },
    //   { username: 'dholley', name: 'Donald Holley', money: 4000, paintings: 6, value: 400, kudos: 35 },
    //   { username: 'mjenkins', name: 'Matt Jenkins', money: 1500, paintings: 8, value: 350, kudos: 85 },
    // ],
<<<<<<< HEAD
=======
>>>>>>> 885a1a6620c54a4ea0972a8cfb67c15a4ed6dd4a
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
<<<<<<< HEAD
              serverfuncs.updateUserData(newData);
=======
<<<<<<< HEAD
              console.log(oldData);
=======
              serverfuncs.updateUserData(newData);
>>>>>>> 885a1a6620c54a4ea0972a8cfb67c15a4ed6dd4a
>>>>>>> 6b1b2f13fba4af1292de1a4a318c50de208773fe
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}