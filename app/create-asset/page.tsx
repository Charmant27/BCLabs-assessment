'use client'
import { useState } from "react";

const CreateAsset = () => {
  const [formData, setFormData] = useState({
    name: '',
    last_trade: '',
    percentage: '',
    change: '',
    logo: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        logo: reader.result as string,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/assets/create-assets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Asset created successfully', result);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-white-200 h-screen grid place-content-center'>
      <h2 className="text-center pb-5 text-slate-700">Add Asset</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Asset name' onChange={handleChange} />
        <input type="text" name="last_trade" placeholder='Last trade' onChange={handleChange} />
        <input type="text" name="percentage" placeholder='Percentage' onChange={handleChange} />
        <input type="text" name="change" placeholder='Change' onChange={handleChange} />
        <input type="file" name="logo" onChange={handleFile} />
        <button className="rounded-lg px-6 py-3 bg-blue-100 text-white-200" type="submit">Create asset</button>
      </form>
    </div>
  );
};

export default CreateAsset;
