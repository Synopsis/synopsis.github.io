---
permalink: /sdk/
title: "Synopsis SDK"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Synopsis-BR-1.jpg
  actions:
    - label: "Github"
      url: "https://github.com/Synopsis"
excerpt: "macOS and iOS Framework for advanced metadata analysis, encoding, decoding and comparison"

intro: 
  - excerpt: 'Synopsis is currently under heavy development and in alpha phase. Want to know more - [join our slack channel](https://join.slack.com/t/synopsis-discuss/shared_invite/enQtODIzNjg5MzA1MDYwLTg4OGM5ZGMzZTQ3OTBjYTQzZDMyNDY0ZWM3NzFkN2YxZTE5NWI5NWQyMmZjMGE1OGYyZmExMWFlZWVkMDE4ZWQ) for info'
---

{% include feature_row id="intro" type="center" %}

Synopsis Framework powers Analyzer and Inspector and lets your apps:

<!-- {% highlight objectivec %}
- (void)metadataOutput:(AVPlayerItemMetadataOutput *)output didOutputTimedMetadataGroups:(NSArray *)groups fromPlayerItemTrack:(AVPlayerItemTrack *)track
{
    NSMutableDictionary* metadataDictionary = [NSMutableDictionary dictionary];
    
    for(AVTimedMetadataGroup* group in groups)
    {
        for(AVMetadataItem* metadataItem in group.items)
        {
            NSString* key = metadataItem.identifier;
            
            if ([key isEqualToString:kSynopsisMetadataIdentifier])
            {
                id metadata = [self.metadataDecoder decodeSynopsisMetadata:metadataItem];
                if(metadata)
                {
                    [metadataDictionary setObject:metadata forKey:key];
                }
            }
            else
            {
                id value = metadataItem.value;
                [metadataDictionary setObject:value forKey:key];
            }
        }
    }
    
    if(self.metadataInspector && metadataDictionary)
    {
        [self.metadataInspector setFrameMetadata:metadataDictionary];
    }
}
{% endhighlight %} -->

* Read metadata generated from Analyzer or other tools implementing Synopsis metadata specification.
* Analyze media to generate new metadata
* Write metadata using our metadata codec
* Use extended file system attributes to make media files Spotlight friendly
* Mathematically compare metadata using various metrics
* Tools to build novel next generation smart media UIs
* Provides standard UI components to display metadata

# Pretained Models

CinemaNet provides pre-trained models outside of just the SDK. If you are looking to target other platforms, or want to build custom solutions, our models suitable for realtime usage even on mobile. 

Using Googles industry standard MobileNetV2 neural network architecture, we provide models in CoreML (.mlmodel), Keras (.h5), Tensorflow (.pb) formats as well as JSON.

# Integration

If you are interested in integrating Synopsis.framework into your product - please get in touch, were happy to help.

