'use client';
import Button from '@/components/button';
import Input from '@/components/input';

const Page = () => {

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Pass the form element directly to FormData
    const formData = new FormData(event.currentTarget);

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;

    // Alternative: Convert all fields into a single object
    const allFields = Object.fromEntries(formData.entries());
    console.log(allFields);

    alert('Hello ' + allFields.FirstName + ' ' + allFields.LastName);
  };

  return (
    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <Input
          type='text'
          name='FirstName'
          id='FirstName'
          labelText='First Name'
        />
      </div>
      <div className="mb-4">
        <Input
          type='text'
          name='LastName'
          id='LastName'
          labelText='Last Name'
        />
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <Button
            label='Click Me'
          //onClick={onClick}
          />
        </div>
      </div>
    </form>
  )
}

export default Page