import { Button } from './ui/button';

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  return (
    <div className="p-4 space-y-4 text-center">
      <h2 className="text-2xl font-bold">Set up MFA</h2>
      <p className="text-sm text-muted-foreground">
        Scan this QR code in your authenticator app and continue when ready.
      </p>
      {props.qrCodeUrl ? (
        <div
          className="mx-auto flex w-[220px] justify-center rounded-md border bg-white p-2"
          dangerouslySetInnerHTML={{__html: props.qrCodeUrl}}
        />
      ) : (
        <p className="text-red-500">Unable to load the MFA QR code.</p>
      )}
      <Button type="button" onClick={props.switchForm}>
        Continue
      </Button>
    </div>
  );
};

export default Setup2FA;
