import React, { useEffect, useState } from "react";
import Cancel from "../../../Components/Button/Cancel";
import Loading from "../../../Components/Loading";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-hot-toast";

function Instagram({ close, HandleSwitchPage     }) {
    const [DataInstagram, setDataInstagram] = useState([]);
    const [AccessToken, setAccessToken] = useState("");
    const [block, setblock] = useState(false);

    // * Function
    const GetDataInstagram = (token) => {
        setblock(true);
        var url = `https://graph.instagram.com/me/media?fields=id,username,media_url,permalink&access_token=${token}`;
        axios
            .get(url)
            .then((res) => {
                setDataInstagram(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                setDataInstagram([]);
            })
            .finally(() => {
                setblock(false);
            });
    };

    const HandleGetDataInstagram = (data) => {
      var url = "/api/instagram/store";
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to Delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.post(url, data).then(res => {
                Swal.fire({
                    icon:'success',
                    title: 'Success',
                    text: 'Data Success Fully Created'
                  });
                  setTimeout(() => {
                    HandleSwitchPage();
                  }, 500);
            }).catch(err => {
                console.log(err);
                var ResError = {
                    icon: 'error',
                    title: 'Oops...',
                    text:  err.response.data.message
                }
                Swal.fire(ResError);
            })
        }
      })
        
    };
    const HandleChangeStatus = (uuid) => {
        var url = "/api/instagram/store";
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to Delete this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              axios.post(url, data).then(res => {
                  Swal.fire({
                      icon:'success',
                      title: 'Success',
                      text: 'Data Success Fully Created'
                    });
                    setTimeout(() => {
                      HandleSwitchPage();
                    }, 500);
              }).catch(err => {
                  console.log(err);
                  var ResError = {
                      icon: 'error',
                      title: 'Oops...',
                      text:  err.response.data.message
                  }
                  Swal.fire(ResError);
              })
          }
        })
          
      };
    useEffect(() => {
        var a = true;
        if (a) {
          GetDataInstagram(AccessToken);
        }
        return () => a = false;
    }, []);

    useEffect(() => {
        var debounce = setTimeout(() => {
          GetDataInstagram(AccessToken);
        }, 700);
        return () => clearTimeout(debounce);
    }, [AccessToken]);
    console.log(DataInstagram);
    return (
        <div className="bg-white p-6 rounded-lg mb-2">
            <div className="flex justify-between items-center">
                <span className="font-semibold text-xl">
                    Instagram User Data
                </span>
                <Cancel
                    onClick={() => {
                        close();
                    }}
                />
            </div>
            <div className="h-[2px] w-full bg-gray-300 my-3"></div>
            <div className="mb-2">
                <input
                    id="title"
                    type="text"
                    placeholder="Access Token"
                    className="border-[1px] border-solid rounded-md border-gray-400 focus:outline-blue-500 px-2 py-1 w-[400px]"
                    name="jabatan"
                    value={AccessToken}
                    onChange={(e) => {
                        setAccessToken(e.target.value);
                    }}
                    autoComplete="off"
                />
            </div>
            <div className="overflow-y-auto">
                <table className="w-full">
                    <thead className="h-10 bg-gray-300 rounded-lg text-start">
                        <tr className="rounded-lg">
                            <th className="text-start px-2 w-10">No.</th>
                            <th className="text-center w-60">Image</th>
                            <th className="text-center">Post Id</th>
                            <th className="text-center">Username</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {block ? (
                            <Loading colSpan={5} />
                        ) : (
                            DataInstagram?.map((item, index) => (
                                <tr className={`h-14 hover:bg-gray-200`} key={index}>
                                    <td className="text-center px-2 font-semibold">
                                        {index + 1}
                                    </td>
                                    <td className="text-center px-2 font-semibold">
                                        <div className="flex h-20">
                                            <a
                                                href={item?.media_url}
                                                target="_blank"
                                                className="flex h-20 w-full justify-center p-2"
                                            >
                                                <img
                                                    src={item?.media_url}
                                                    alt="Image"
                                                    className="rounded-md w-28"
                                                    loading="lazy"
                                                />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="text-center px-2 font-semibold">
                                        {item.id}
                                    </td>
                                    <td className="text-center px-2 font-semibold">
                                        {item.username}
                                    </td>
                                    <td>
                                        <div className="flex justify-center gap-x-1">
                                            <button
                                                onClick={() => {
                                                    HandleGetDataInstagram(
                                                        item
                                                    );
                                                }}
                                                className="border-[2px] text-sm border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-2 rounded-lg transition-all duration-300 active:scale-95"
                                            >
                                                GET DATA
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                        {DataInstagram?.data?.length == 0 ||
                        (DataInstagram.length == 0 && !block) ? (
                            <tr className="bg-gray-200 h-14">
                                <td colSpan={5} className="font-semibold">
                                    <span className="ml-1">Not Found</span>
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Instagram;
