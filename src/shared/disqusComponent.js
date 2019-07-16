import React from 'react';
export class DisqusCommentsComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { changed: false };
      this.addScript = this.addScript.bind(this);
      this.resetDisqus = this.resetDisqus.bind(this);
   }
   componentDidMount() {
      this.addScript();
   }
   resetDisqus(newIdentifier, newUrl) {
      if (window.DISQUS) {
         window.DISQUS.reset({
            reload: true,
            config: function () {
               this.page.identifier = newIdentifier;
               this.page.url = newUrl;
               this.page.title = newIdentifier;
               this.page.shortname = newIdentifier;
            }
         });
         this.setState({ changed: true });
      }
   }
   addScript() {
      try {
         const { disqusId } = this.props;
         const scriptId = 'disqus_script';
         let scriptTag = document.getElementById(scriptId);
         if (scriptTag) {
            this.resetDisqus(disqusId, window.location.href);
            return;
         }
         var d = document, s = d.createElement('script');
         s.id = scriptId;
         s.async = true;
         s.src = `http://${disqusId}.disqus.com/embed.js`;
         s.setAttribute('data-timestamp', +new Date());
         (d.head || d.body).appendChild(s);
      }
      catch (e) { console.log(e); }
   }
   render() {
      return (
         <div id="disqus_thread"></div>
      );
   }
}

export default DisqusCommentsComponent;