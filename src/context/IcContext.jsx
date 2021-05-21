import React, {useState, useEffect, useMemo} from "react";

const IcContext = React.createContext();

export function IcProvider(props) {
  const [staticSetup, setStaticSetup] = useState();
  const [dynamicSetup, setDynamicSetup] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.ic.init({
      precompileSetup: () => {
        window.ic.registerFunction('uiShowLoader', () => {
          document.getElementById('loader-elem').style.display = 'flex';
        })
        window.ic.registerFunction('uiHideLoader', () => {
          document.getElementById('loader-elem').style.display = 'none';
        })
      },
      setupStatics: (scope) => {
        scope.onRender((params) => {
          setStaticSetup(params);
        });
      },
      setupStates: (scope) => {
        scope.onStateChange({
          onComplete: (params) => {
            params.content.inputs = params.content.inputs || [];
            params.content.buttons = params.content.buttons || [];
            setDynamicSetup(params);
          },
        });
      },
    });

  }, []);

  const value = useMemo(() => {
    return {
      staticSetup,
      dynamicSetup,
      loading,
    };
  }, [dynamicSetup, loading, staticSetup]);

  return <IcContext.Provider value={value} {...props} />;
}

export function useIc() {
  const context = React.useContext(IcContext);
  if (!context) {
    throw new Error("useIc should be inside provider IcContext");
  }
  return context;
}
