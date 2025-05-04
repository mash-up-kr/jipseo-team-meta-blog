import MetaBlogLogo from './svg/MetaBlogLogo';

function CopyRight() {
  return (
    <div className="flex gap-x-[10px] items-center">
      <MetaBlogLogo />
      <div className="flex flex-col gap-y-[2px]">
        <span className={'text-xl text-[#141612]'}>
          Meta<span className="font-extrabold">Blog</span>
        </span>
        <small className="text-base">© 2025 Hajun. All rights reserved.</small>
      </div>
    </div>
  );
}

export default CopyRight;
