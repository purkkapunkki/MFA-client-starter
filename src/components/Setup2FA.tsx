import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Button } from './ui/button';

const Setup2FA = (props: { qrCodeUrl: string; switchForm: () => void }) => {
  const [svgMarkup, setSvgMarkup] = useState('');
  const [fallbackDataUrl, setFallbackDataUrl] = useState('');

  useEffect(() => {
    const renderQrCode = async () => {
      if (!props.qrCodeUrl) {
        return;
      }

      try {
        const encodeQR = (await import('@paulmillr/qr')).default;
        setSvgMarkup(encodeQR(props.qrCodeUrl, 'svg'));
        setFallbackDataUrl('');
      } catch {
        const dataUrl = await QRCode.toDataURL(props.qrCodeUrl);
        setFallbackDataUrl(dataUrl);
        setSvgMarkup('');
      }
    };

    renderQrCode();
  }, [props.qrCodeUrl]);

  return (
    <div className="p-4 space-y-4 text-center">
      <h2 className="text-2xl font-bold">Set up MFA</h2>
      <p className="text-sm text-muted-foreground">
        Scan this QR code in your authenticator app and continue when ready.
      </p>
      {svgMarkup ? (
        <div
          className="mx-auto flex w-[220px] justify-center rounded-md border bg-white p-2"
          dangerouslySetInnerHTML={{__html: svgMarkup}}
        />
      ) : fallbackDataUrl ? (
        <img
          src={fallbackDataUrl}
          alt="MFA QR code"
          className="mx-auto block rounded-md border bg-white p-2"
        />
      ) : null}
      <Button type="button" onClick={props.switchForm}>
        Continue
      </Button>
    </div>
  );
};

export default Setup2FA;
