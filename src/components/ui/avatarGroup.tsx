import React, { useState } from "react";
// import fastapi from "../../assets/technologiesImages/FastAPI.svg";
// import python from "../../assets/technologiesImages/Python.svg";
// import django from "../../assets/technologiesImages/Django.svg";
// import reactlogo from "../../assets/technologiesImages/React.svg";
// Avatar Component
interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  tooltip?: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  fallback,
  tooltip,
  className = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-3 border-white bg-linear-to-br from-blue-500 to-purple-500 font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 ${className}`}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || fallback}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="text-sm">{fallback}</span>
        )}
      </div>

      {tooltip && showTooltip && (
        <div className="animate-in fade-in absolute -top-10 left-1/2 z-50 -translate-x-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm whitespace-nowrap text-white shadow-lg duration-200">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

// Avatar Group Component
interface AvatarData {
  src?: string;
  fallback: string;
  tooltip?: string;
  alt?: string;
}

interface AvatarGroupProps {
  avatars: AvatarData[];
  max?: number;
  className?: string;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max,
  className = "",
}) => {
  const displayAvatars = max ? avatars.slice(0, max) : avatars;
  const remainingCount = max && avatars.length > max ? avatars.length - max : 0;

  return (
    <div className={`flex items-center -space-x-3 ${className}`}>
      {displayAvatars.map((avatar, index) => (
        <div key={index} style={{ zIndex: displayAvatars.length - index }}>
          <Avatar
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
            tooltip={avatar.tooltip}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-full border-3 border-white bg-gray-200 font-semibold text-gray-700 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-800 dark:bg-gray-700 dark:text-gray-300"
          style={{ zIndex: 0 }}
        >
          <span className="text-sm">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
};

// Demo App
export default function App() {
  const teamMembers: AvatarData[] = [
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      fallback: "JD",
      tooltip: "John Doe",
      alt: "John Doe",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      fallback: "JS",
      tooltip: "Jane Smith",
      alt: "Jane Smith",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      fallback: "MJ",
      tooltip: "Mike Johnson",
      alt: "Mike Johnson",
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      fallback: "EW",
      tooltip: "Emily Wilson",
      alt: "Emily Wilson",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      fallback: "DB",
      tooltip: "David Brown",
      alt: "David Brown",
    },
    {
      fallback: "SA",
      tooltip: "Sarah Anderson",
    },
    {
      fallback: "RT",
      tooltip: "Robert Taylor",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-8 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-2xl space-y-12">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Avatar Group Component
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Hover over avatars to see tooltips
          </p>
        </div>

        <div className="space-y-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Team Members
            </h2>
            <AvatarGroup avatars={teamMembers} />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Max 5 Avatars
            </h2>
            <AvatarGroup avatars={teamMembers} max={5} />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Small Group
            </h2>
            <AvatarGroup avatars={teamMembers.slice(0, 3)} />
          </div>
        </div>

        <div className="rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 p-1">
          <div className="rounded-xl bg-white p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Featured Project Team
            </h3>
            <AvatarGroup avatars={teamMembers.slice(0, 4)} />
          </div>
        </div>
      </div>
    </div>
  );
}
